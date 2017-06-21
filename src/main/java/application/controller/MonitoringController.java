package application.controller;

import application.model.RequestData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

/**
 * User: Militaru Gabriel
 * Date: 6/20/2017
 */
@RestController
@RequestMapping("/monitoring")
public class MonitoringController {
    @GetMapping(value="/{host}/{port}")
    public List<Long> getMonitoringData(@PathVariable(value="host") String host, @PathVariable(value="port") Integer port){
        RestTemplate restTemplate = new RestTemplate();
        RequestData[] requestDataList = restTemplate.getForObject("http://" + host + ":" + port + "/request-monitor", RequestData[].class);
//        RequestData[] requestDataList = restTemplate.getForObject("http://" + "localhost" + ":" + 32772 + "/request-monitor", RequestData[].class);
        List<Long> result = new ArrayList<>();
        for (RequestData requestData: requestDataList) {
                result.add(requestData.getEndTime() - requestData.getStartTime());
        }
        return result;
    }
}
