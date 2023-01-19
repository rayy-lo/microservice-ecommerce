## Microservices E-Commerce Application

A sample e-commerce web application based on a microservices architecture and Docker containers.

### Architecture Overview

This application is designed with a microservice oriented architecture approach. It implements multiple microservices each with it's own database in their respective Docker containers. The web application communicates to these microservices and uses a message broker, RabbitMQ, to asynchronously handle these events.

![System design diagram of e-commerce store and it's microservices](/images/eCommerce-microservice-design.png)
