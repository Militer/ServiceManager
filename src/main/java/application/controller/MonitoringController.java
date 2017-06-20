package application.controller;

import application.model.RequestData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * User: Militaru Gabriel
 * Date: 6/20/2017
 */
@RestController
@RequestMapping("/monitoring")
public class MonitoringController {
    @GetMapping(value="/{host}/{port}")
    public List<RequestData> getMonitoringData(@PathVariable(value="host") String host, @PathVariable(value="port") Integer port){
        RestTemplate restTemplate = new RestTemplate();
        List<RequestData> requestData = restTemplate.getForObject("http://" + host + ":" + port + "/request-monitor", List.class);
        return requestData;
    }
}
