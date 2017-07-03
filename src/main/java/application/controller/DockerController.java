package application.controller;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.exceptions.DockerCertificateException;
import com.spotify.docker.client.exceptions.DockerException;
import com.spotify.docker.client.messages.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * User: militer
 * Date: 18.06.2017.
 */
@RestController
@RequestMapping("/docker")
public class DockerController {
    @GetMapping
    public void getContainers(String serviceName) {
        String imageName = "militer/" + serviceName;
        try (final DockerClient docker = DefaultDockerClient.fromEnv().build()) {
            HostConfig hostConfig = HostConfig.builder().networkMode("gabi_nw").build();

            ContainerConfig containerConfig = ContainerConfig.builder()
                    .hostConfig(hostConfig)
                    .image(imageName)
                    .build();

            final ContainerCreation containerCreation = docker.createContainer(containerConfig);
            docker.startContainer(containerCreation.id());

        } catch (DockerCertificateException | InterruptedException | DockerException e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping
    public void removeContainer(String serviceName) {
        String imageName = "militer/" + serviceName;
        try (final DockerClient docker = DefaultDockerClient.fromEnv().build()) {
            List<Container> containers = docker.listContainers();
            for (Container container : containers){
                if (container.image().equals(imageName)){
                    docker.killContainer(container.id());
                    docker.removeContainer(container.id());
                    break;
                }
            }
        } catch (DockerCertificateException | InterruptedException | DockerException e) {
            e.printStackTrace();
        }
    }
}
