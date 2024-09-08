package com.example.login_jwt.Demo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
    private String name;
    private String surname;
    private String email;
    private String phone;
    private String country;
    private String about;
}
