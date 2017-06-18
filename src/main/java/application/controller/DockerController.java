package application.controller;

import com.spotify.docker.client.DefaultDockerClient;
import com.spotify.docker.client.DockerClient;
import com.spotify.docker.client.exceptions.DockerCertificateException;
import com.spotify.docker.client.exceptions.DockerException;
import com.spotify.docker.client.messages.Container;
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
    public List<Container> getContainers() {
        List<Container> containerList = null;
        try (final DockerClient docker = DefaultDockerClient.fromEnv().build()) {
            containerList = docker.listContainers();
        } catch (DockerCertificateException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (DockerException e) {
            e.printStackTrace();
        }
        return containerList;
    }
}
