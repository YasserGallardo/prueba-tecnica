package com.example.login_jwt.Demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class DemoController {
    @PostMapping(value = "personal-information")
    public UserInfo welcome() {
        return new UserInfo(
                "Yasser Juvenal",
                "Gallardo",
                "ygallardo@sv.tigo.com",
                "+503 74932496",
                "SV",
                "Desarrollador web con experiencia en React, Flask, Django y Spring Boot. Apasionado por la tecnología y la resolución de problemas.");

    }
}
