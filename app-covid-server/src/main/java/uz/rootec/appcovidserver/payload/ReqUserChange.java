package uz.rootec.appcovidserver.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Sherlock on 16.12.2021.
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReqUserChange {
    private String newLogin;
    private String oldPassword;
    private String newPassword;
}
