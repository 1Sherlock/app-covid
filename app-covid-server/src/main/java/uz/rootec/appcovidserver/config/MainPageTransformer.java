package uz.rootec.appcovidserver.config;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.resource.ResourceTransformer;
import org.springframework.web.servlet.resource.ResourceTransformerChain;
import org.springframework.web.servlet.resource.TransformedResource;
import uz.rootec.appcovidserver.entity.Patient;
import uz.rootec.appcovidserver.repository.PatientRepository;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@Component
public class MainPageTransformer implements ResourceTransformer {

    @Autowired
    PatientRepository patientRepository;

//    //
//    public MainPageTransformer() {
//        this.courseRepository = (CourseRepository) SpringConfiguration.contextProvider().getApplicationContext().getBean("courseRepository");
//        this.roadmapRepository = (RoadmapRepository) SpringConfiguration.contextProvider().getApplicationContext().getBean("roadmapRepository");
//        this.bootcampRepository = (BootcampRepository) SpringConfiguration.contextProvider().getApplicationContext().getBean("bootcampRepository");
//
//    }


    @Override
    public Resource transform(HttpServletRequest request, Resource resource, ResourceTransformerChain transformerChain) throws IOException {
        String url = request.getRequestURI();
        String html = IOUtils.toString(resource.getInputStream(), "UTF-8");
        if (url.contains("/sertificate")) {
            try {
                String urls[] = url.split("/");
                Patient patient = patientRepository.getOne(UUID.fromString(urls[2]));
                String stringDate = patient.getAnaliseDate();
                Date date1=new SimpleDateFormat("dd.MM.yyyy HH:mm").parse(stringDate);
                Calendar cal = Calendar.getInstance();
                cal.setTime(date1);
                cal.add(Calendar.HOUR_OF_DAY, 4);
                Date time = cal.getTime();
                DateFormat targetFormat = new SimpleDateFormat("dd.MM.yyyy HH:mm");
                String format = targetFormat.format(date1);
                String format1 = targetFormat.format(time);
                html = html.replaceAll("<div id=\"root\"></div>", "<div style=\"width:1240px !important;margin:0 auto !important;font-family: 'Roboto', sans-serif; background-image: url('/flag.png'); background-size: 100% 100%; background-repeat: no-repeat;\"\n" +
                            "      data-new-gr-c-s-check-loaded=\"14.1027.0\" data-gr-ext-installed=\"\" cz-shortcut-listen=\"true\">" +
                            "<table style=\"width:1180px !important; margin-top:20px !important;font-family: 'Roboto', sans-serif; margin-left: 25px;\">\n" +
                            "    <tbody>\n" +
                            "    <tr>\n" +
                            "        <td style=\"width:375px !important;font-size:22px !important;text-align:center !important;padding-left:14px !important;padding-right:14px !important;font-family: 'Roboto', sans-serif;vertical-align: top;padding-top: 90px;\">\n" +
                            "            MINISTRY OF HEALTH OF THE <br> REPUBLIC OF UZBEKISTAN <br> CONFIRMATION OF COVID-19 <br> TEST RESULT\n" +
                            "        </td>\n" +
                            "        <td style=\"width:220px !important; padding-top: 90px; text-align:center;\"><img src=\"/gerb.png\" width=\"200\" height=\"207\"></td>\n" +
                            "        <td style=\"width:375px !important;font-size:22px !important;text-align:center !important;padding-left:20px !important;padding-right:20px !important;font-family: 'Roboto', sans-serif;vertical-align: top;padding-top: 90px;\">\n" +
                            "            ???????????????????????? <br>?????????????????????????????? <br>???????????????????? ???????????????????? <br>?????????????????????????? ???????????????????? <br> ?????????? COVID-19\n" +
                            "        </td>\n" +
                            "    </tr>\n" +
                            "    </tbody>\n" +
                            "</table>\n" +
                            "<div style=\"width:1240px !important;font-size:20px !important;font-family: 'Roboto', sans-serif; padding: 0 100px 100px; \">\n" +
                            "    <p>ID / ??????????: <span id=\"serial\">"+ patient.getSerial() +"</span></p>\n" +
                            "    <p>Laboratory (name) / ?????????????????????? (????????????????): <span id=\"laboratory\">"+ patient.getLaboratory().getNameEn() + " / " + patient.getLaboratory().getNameRu() +"</span></p>\n" +
                            "    <p>Place of sampling / ?????????? ???????????? ??????????????: <span id=\"place\">"+ patient.getPlace().getNameEn() + " / " + patient.getPlace().getNameRu() +"</span></p>\n" +
                            "    <p style=\"\">Research method / ?????????? ????????????????????????: <span id=\"method\">"+ patient.getMethodEn() + " / " + patient.getMethodRu() +"</span></p>\n" +
                            "    <div style=\"display:block;width:100%;height:4px;border-bottom: 4px solid #9c9fa4;margin-bottom: 15px;margin-top: 5px;\"></div>\n" +
                            "    <p>?????????? ?? ?????????? ????????????????: <span id=\"passport\">" + patient.getPassportNumber() +"</span></p>\n" +
                            "    <p>Full name / ???????????? ??????: <span id=\"fullname\">" + patient.getFullName() +"</span></p>\n" +
                            "    <p>Birth date / ???????? ????????????????: <span id=\"birthday\">" + patient.getBirthDate() + "</span></p>\n" +
                            "    <p>Sex / ??????: <span id=\"gender\">"+ patient.getGender() + "</span></p>\n" +
                            "    <p>Analysis date / ???????? ?????????? ??????????????: <span id=\"analise\">" + format + "</span></p>\n" +
                            "    <p>Test result and date / ?????????????????? ?? ???????? ??????????: <span id=\"result\">" + patient.getStatus() + " ("+format1+") " +"</span>.</p>\n" +
                            "    <div style=\"text-align:center\"><img\n" +
                            "            src=\"https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https://app-covidd.herokuapp.com/viewResult/"+ url.split("/")[2] +"\"\n" +
                            "            id=\"qr\"\n" +
                            "            style=\"width:250px!important\"></div>" +
                        "<div style=\"text-align: right;\">" +
                            "<img src=\"/shtamp.png\" width=\"250px\">" +
                        "</div>" +
                        " <p style=\"text-align: center; font-size: 12px; font-style: italic; font-weight: bold; margin-top: 150px\">\n" +
                        "        ???????????? ??????????????????-?????????????????????????????????????? ???????????????????????? ?? ?????????????????????????? ???????????????? <br>\n" +
                        "        ???????????????????? ???????????????????? <br>\n" +
                        "        ??????????: Tashkent city. Chilanzar district, Bunyodkor  street, 46 <br>\n" +
                        "        ??????????????: +99891-276 5928 <br>\n" +
                        "        Email: kancelyariya resdsenm@minzdrav.uz <br>\n" +
                        "    </p>\n" +
                            "</div>\n" +
//                      "<div style=\"border: 5px solid #1FB53A; position: fixed; left: 0; top: 0;  width: 100%; height: 100%\"></div>\n" +
//                        "<div style=\"border: 2px solid #CE1125; position: fixed; left: 5px;  top: 5px;  width: calc(100% - 3px); height: calc(100% - 3px)\"></div>\n" +
//                        "<div style=\"border: 2px solid #CE1125; position: fixed; left: 12px;  top: 12px; width: calc(100% - 18px); height: calc(100% - 18px)\"></div>\n" +
//                        "<div style=\"border: 5px solid #0099B5; position: fixed; left: 14px; top: 14px; width: calc(100% - 28px); height: calc(100% - 28px)\"></div>" +
                            "</div>");
            } catch (Exception e) {
                e.printStackTrace();
                return new TransformedResource(resource, html.getBytes());
            }
        }


        return new TransformedResource(resource, html.getBytes());
    }


}
