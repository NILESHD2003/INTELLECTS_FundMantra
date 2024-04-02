import pandas as pd
from flask import Flask
import numpy as np
from flask import request,jsonify
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

app=Flask(__name__)
    
def process_input(input_data):
    # Load data from JSON
    amc_name = input_data.get('amc_name', '')
    min_sip = input_data.get('min_sip', 0)
    category = input_data.get('category', '')

    # Create a dictionary to map amc_names and categories to their respective one-hot encoded columns
    amc_names = [
        'Aditya Birla Sun Life Mutual Fund', 'Axis Mutual Fund', 'Bandhan Mutual Fund', 'Bank of India Mutual Fund',
        'Baroda BNP Paribas Mutual Fund', 'Canara Robeco Mutual Fund', 'DSP Mutual Fund', 'Edelweiss Mutual Fund',
        'Franklin Templeton Mutual Fund', 'HDFC Mutual Fund', 'HSBC Mutual Fund', 'ICICI Prudential Mutual Fund',
        'IDBI Mutual Fund', 'IIFL Mutual Fund', 'ITI Mutual Fund', 'Indiabulls Mutual Fund', 'Invesco Mutual Fund',
        'JM Financial Mutual Fund', 'Kotak Mahindra Mutual Fund', 'L&T Mutual Fund', 'LIC Mutual Fund',
        'Mahindra Manulife Mutual Fund', 'Mirae Asset Mutual Fund', 'Motilal Oswal Mutual Fund', 'Navi Mutual Fund',
        'Nippon India Mutual Fund', 'PGIM India Mutual Fund', 'PPFAS Mutual Fund', 'Quant Mutual Fund',
        'Quantum Mutual Fund', 'SBI Mutual Fund', 'Shriram Mutual Fund', 'Sundaram Mutual Fund', 'Tata Mutual Fund',
        'Taurus Mutual Fund', 'Trust Mutual Fund', 'UTI Mutual Fund', 'Union Mutual Fund', 'WhiteOak Capital Mutual Fund'
    ]
    categories = ['Debt', 'Equity', 'Hybrid', 'Other', 'Solution Oriented']

    # Initialize one-hot encoded columns with zeros
    one_hot_columns = [0] * (len(amc_names) + len(categories) + 1)  # +1 for min_sip

    # Update one-hot encoded columns based on input data
    if amc_name in amc_names:
        amc_index = amc_names.index(amc_name)
        one_hot_columns[amc_index] = 1

    one_hot_columns[-1] = min_sip

    if category in categories:
        category_index = len(amc_names) + categories.index(category)
        one_hot_columns[category_index] = 1

    return one_hot_columns


@app.route('/',methods=['GET'])
def home():
    return jsonify({
        "success": True,
        "message": "Service is Up and Running"
    })

@app.route('/predict',methods=['POST'])
def predict():
    temp=request.get_json()
    # Load the dataset
    data = pd.read_csv("MF_India_AI.csv")

    # Keep only the required features
    data = data[['amc_name', 'min_sip', 'category', 'scheme_name']]

    # Scale numerical variables
    scaler = StandardScaler()
    data['min_sip'] = scaler.fit_transform(data[['min_sip']])

    # Perform one-hot encoding for categorical variables
    data = pd.get_dummies(data, columns=['amc_name', 'category'])

    # Split the data into training and testing sets
    X = data.drop(columns=['scheme_name'])
    y = data['scheme_name']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Initialize the model
    rf_model = RandomForestClassifier(n_estimators=30, random_state=10)

    # Train the model
    rf_model.fit(X_train, y_train)
    
    #Processing the data
    data1 = process_input(temp)
    processed_input = np.array(data1).reshape(1, -1)
    prediction=rf_model.predict(processed_input)
    return jsonify({'prediction':prediction.tolist()})


if __name__=='__main__':
    app.run(debug=True)
