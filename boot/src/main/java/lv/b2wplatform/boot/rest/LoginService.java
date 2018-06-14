package lv.b2wplatform.boot.rest;


import com.b2wplatform.model.UserCredentials;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginService {
    @GetMapping("/api/users")
    public UserCredentials getCredentials() {
        UserCredentials userCredentials = new UserCredentials();
        userCredentials.setPassword("fsdfsadfsda");
        userCredentials.setLogin("dfdfdfd");
        return userCredentials;
    }

}
