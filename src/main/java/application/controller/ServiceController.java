package application.controller;

import application.model.ServiceData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * User: militer
 * Date: 18.06.2017.
 */
@RestController
@RequestMapping("/service")
public class ServiceController {
    private final DiscoveryClient discoveryClient;

    @Autowired
    public ServiceController(DiscoveryClient discoveryClient) {
        this.discoveryClient = discoveryClient;
    }

    @GetMapping
    public List<ServiceData> getServers(){
        List<ServiceData> serviceDataList = new ArrayList<>();
        for (String service: discoveryClient.getServices()){
            serviceDataList.add(new ServiceData(service, discoveryClient.getInstances(service)));
        }
        return serviceDataList;
    }
}
