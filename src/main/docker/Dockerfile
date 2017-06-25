FROM java:8
VOLUME /tmp
ADD service-manager-1.0-SNAPSHOT.jar app.jar
EXPOSE 8082
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]
