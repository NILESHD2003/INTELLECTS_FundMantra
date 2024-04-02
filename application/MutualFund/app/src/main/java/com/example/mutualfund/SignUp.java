package com.example.mutualfund;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
//import com.android.volley.Response;
//import com.android.volley.VolleyError;
//import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

//import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
//import org.json.JSONObject;

public class SignUp extends AppCompatActivity {
    EditText name;
    EditText email;
    EditText ph_no;
    EditText password_signup;
    EditText password_signup_confirm;

    Button signup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_signup);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        name= findViewById(R.id.name);
        email= findViewById(R.id.email);
        ph_no=findViewById(R.id.phone_no);
        password_signup=findViewById(R.id.password_signup);
        password_signup_confirm=findViewById(R.id.password_signup_confirm);
        signup=findViewById(R.id.signupButton);


        RequestQueue requestQueue;
        requestQueue = Volley.newRequestQueue(this);

        JsonObjectRequest jsonObjectRequest = null;
        try {
            jsonObjectRequest = new JsonObjectRequest(Request.Method.POST,
                    "https://intellects-fundmantra.onrender.com/api/v1/auth/signup",
                    new JSONObject()
                            .put("name", name.getText().toString())
                            .put("email", email.getText().toString())
                            .put("phoneNumber",ph_no.getText().toString())
                            .put("password",password_signup.getText().toString())
                            .put("confirmPassword",password_signup_confirm.getText().toString()),
                    response -> {
                        try {
                            Log.d("myapp", "The response is" + response.getString("username"));
                            //storing data
                            String name = response.getString("name");
                            String email = response.getString("email");
                            String phoneNumber = response.getString("phoneNumber");
                            String password = response.getString("password");
                            String confirmPassword = response.getString("confirmPassword");
                            String token = response.getString("token");


                            //forwarding to next page
                            // Forward the data to the next page
                            Intent intent = new Intent(this, OTP.class);
                            intent.putExtra("email", email);
                            intent.putExtra("token",token);
                            startActivity(intent);

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    },
                    error -> Log.d("myapp", "Something went wrong"));
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }

        requestQueue.add(jsonObjectRequest);



    }
    }
