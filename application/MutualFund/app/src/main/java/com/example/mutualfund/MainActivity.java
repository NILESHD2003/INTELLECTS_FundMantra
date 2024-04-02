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
//import com.android.volley.Response;
//import com.android.volley.VolleyError;
//import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

//import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
//import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {
    EditText username;
    EditText password;
    Button Login;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

       username= findViewById(R.id.username);
       password= findViewById(R.id.password);
       Login=findViewById(R.id.loginButton);


        RequestQueue requestQueue;
        requestQueue = Volley.newRequestQueue(this);

        JsonObjectRequest jsonObjectRequest = null;
        try {
            jsonObjectRequest = new JsonObjectRequest(Request.Method.POST,
                    "https://intellects-fundmantra.onrender.com/api/v1/auth/login",
                    new JSONObject()
                            .put("username", username.getText().toString())
                            .put("password", password.getText().toString()),
                    response -> {
                        try {
                            Log.d("myapp", "The response is" + response.getString("username"));

                            // Store the response data for later use
                            String username = response.getString("username");
                            String password = response.getString("password");
                            String token = response.getString("token");



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

    public void openSignUpActivity(View view) {
        Intent intent = new Intent(this, SignUp.class);
        startActivity(intent);
    }
}