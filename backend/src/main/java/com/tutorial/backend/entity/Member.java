package com.tutorial.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@Table(name = "tbl_member")
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String memberEmail;

    private String memberPassword;

    @Enumerated(EnumType.STRING)
    private Authority authority;






    @Builder
    public Member(Long id, String memberEmail, String memberPassword, Authority authority) {
        this.id = id;
        this.memberEmail = memberEmail;
        this.memberPassword = memberPassword;
        this.authority = authority;
    }
}
