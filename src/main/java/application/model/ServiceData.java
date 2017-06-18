package application.model;

import org.springframework.cloud.client.ServiceInstance;

import java.util.List;

/**
 * User: militer
 * Date: 18.06.2017.
 */
public class ServiceData {
    private String name;
    private List<ServiceInstance> serviceInstances;

    public ServiceData() {
    }

    public ServiceData(String name, List<ServiceInstance> serviceInstances) {
        this.name = name;
        this.serviceInstances = serviceInstances;
    }

    public String getName() {
        return name;
    }

    public List<ServiceInstance> getServiceInstances() {
        return serviceInstances;
    }
}
