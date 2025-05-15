---
date: '2025-03-09T21:19:45Z'
draft: false
title: 'Deployment Diagrams'
weight: "50" 
---

Deployment is everything that happens between writing software and actually using that software by its intended users. And as we get more software and more users, deployment becomes more complex.

## Why deployment diagrams?

Deployment diagrams are a great technique for communicating about important decisions in deploying software. Decisions such as who is going to do what, how are things connected, and so on.

There are many ways to draw deployment diagrams and many standards to choose from. UML and Archimate are just a few of them. To me, there is no single right way to create deployment diagrams. In that sense, these diagrams are more like maps. And the usefulness of a map depends on the journey that you are going to make. A map for a mountain walk is pretty useless if you want to make a railroad journey and vice versa.

In this section, I’m setting out to define the principles that these maps should adhere to.
The reason for that is that there is a lot of intuition on these types of diagram and their visualization. 

It turns out that the actual symbols to use are not so relevant. It is more important to understand what we mean by those symbols, and how these diagrams are useful.

## What do we want to model?

Modern IT systems are made up of many components, but all of them handle data in one way or another. Some of the important principles are that we want to understand where data is stored (at rest), where it is being processed, and how it moves from one place to another.

What you want to explore is how data is connected because that tells us something about who can access which data.  The converse of that is that we can also then see how things are isolated from one another. And this is a really important thing for security. If we know who is responsible for which component we can also understand who is responsible for capacity, for security, and for making it into production bringing it into production.

We used to think that we are connecting computers. But these days we are really connecting execution environments. An execution environment can be a computer, but it could also be a virtual machine or a container. Or it could be a Lambda function. The essence of an execution environment is that it runs code and that it is somewhat isolated from its environment. It also implies that we can then look at how these execution environments are connected.

Take the following simple example. On the left we have a user working on the web browser, on the right-hand side, we see the web server. They are connected through the Internet. The web server is an execution environment that serves up webpages. The user’s browser is an execution environment that renders these webpages to the user. And we annotate the connection link with the protocol that is being used.

![simple client server](/deploy-images/simple-cs.png)

So we see two important concepts illustrated in this diagram: execution environments and connectivity.

Now in a more formal notation such as UML or Archimate, this would look a bit different. Many would be able to argue about the specific symbols to use, but when I am pragmatic I am only concerned with how well the diagram communicates.

![webclient formal](/deploy-images/webclient-formal.png)

## How detailed should your model be?

A diagram is meant to communicate. It should communicate the most essential thing that you want to bring across to the people who are looking at your diagram. In this diagram, we are focusing on how the WebServer and the DNS service are probably different services. As a result, this diagram emphasizes the protocols that are being used, and the separate execution environments that are involved.

![webserver DNS](/deploy-images/webserver-dns.png)

Alternatively, we could introduce the Internet as an actor. In reality, by the way, the Internet is actually a set of actors, but we don’t show that here. What this diagram also shows, in comparison to the previous picture, is that there are multiple levels of detail on which you can draw these diagrams. Again, it all depends on what you want to illustrate.

![webserver internet formal](/deploy-images/webserver-DNS-internet.png)

## Architectural decisions

One of the purposes of deployment diagrams is to document and demonstrate architectural decisions. These decisions could, for example, be on the flow of data, the location of data, and where data is actually being processed. In the next example, we show how this works in a music distribution service, such as Spotify or Apple Music.

In your typical setup, there are three major components: the cloud-based music storage, the speaker or sound system to play the music on, and a mobile device to control it all from. This potentially gives us three connections. The first one is from the mobile device to the cloud-based music service to select the music that you want to play.

But how does the music get to the speaker?

There are two options. The first option is that the music goes from the cloud to the mobile, and then to the speaker. The other option is that the music goes straight from the cloud to the speaker. In fact, both options happen in reality. The first one describes a Bluetooth connection between the mobile and speaker, and the second one can be seen with Spotify connected speakers.

![music distribution](/deploy-images/music-distribution.png)

It is an interesting exercise to discuss the benefits and disadvantages of both options. You might also want to dive deeper into the actual protocols being used to make this work. Especially the protocols between the speakers and the rest are not so trivial.

## Cloud-Native

How is deployment different in a cloud-native age? To begin with, there is virtualization, there is containerization, we have functions as a service (such as AWS Lambda), we have DevOps, we have infrastructure as code, we have external services, APIs, and so on.

And then we have also flexible infrastructure that can rapidly scale up and scaled-down. All of this brings complications to drawing deployment diagrams. Let’s see how we can accommodate each of these cloud-native concepts in our diagrams.

## Virtualization

A virtual machine is an execution environment that lives within another execution environment, probably a physical host. Remember that an execution environment is isolated from other execution environments. A virtual machine is in complete control of the entire memory address space in the machine that it runs on. It only shares the hypervisor on that machine. That is quite powerful isolation.  In fact, it also has network interfaces that are completely indistinguishable in capabilities from the network interfaces on a physical machine.

Similarly, a container (such as a Docker container) is an execution environment that lives within another environment. Each container is pretty isolated from the other containers that run on the same host, although not so isolated as a virtual machine is from another virtual machine. For example, containers share network port address space. This means that two containers on the same post cannot use the same IP address port number.

In the diagram below we have chosen not to show how the network is organized.

![VM and containers](/deploy-images/VMs-and-containers.png)
Note that we have combined containers and VMs in one picture. This architecture actually happens in reality, it has its advantages. We’ve also chosen not to show any details of the underlying operating systems, hypervisors or Docker runtimes in this picture. Again, depending on what you want to communicate with the diagram, you might want to include those networking and other details.

## Automated deployment

Let’s move into slightly more advanced cases of deployment. It is pretty common these days to automate the deployment of software on any given machine. That has many advantages in terms of reproducibility, maintainability, and ease of upgrade. And that also comes with security benefits. However, it does require additional software and deployment components to get this going. That is because there are many more moving parts in this type of IT architecture.

For example, you need some kind of machine to deploy from, and a machine or environment to deploy to. You also need some technology to remotely deploy and configure the software. A popular tool for that these days is Ansible. Instead of typing commands on the command line, or clicking in a user interface, the configuration of the target machine is the result of a script that is executed. We say that this script is then ‘manifested’ into the target environment. As a side note, the word manifest originates from shipping, where it describes a document that lists the cargo items that are to be on the ship.

In automated deployment, it is very important to understand what type of infrastructure and software is created by whom or what. For that reason, we introduce a special type of relation, the manifestation relation. We signify this relation by a dashed line. Of course, there is still an underlying communication protocol that is necessary for this to work.

In the next diagram, the target machine is remotely configured from an Ansible playbook. On the target machine, we indicate the components and software that are to be installed there, and those should be described in the Ansible playbook. To make this a completely reproducible architecture, we also need to describe what the software components are that should be on the deployment machine to begin with.
![vm deploy](/deploy-images/vm-deploy.png)

The old-fashioned flowchart symbol with the folded corner resembling a document is used to indicate where data is being stored. In this case, that is the Ansible playbook.

## Cloud deployments

In the previous diagram, we have simply installed the software onto an existing virtual machine. In a cloud world, however, we can go much beyond that. We can deploy what is called “infrastructure as code”, where complete architectures can be provisioned automatically. In the example below, we are using a deployment machine to run a Terraform script that automatically deploys 2 virtual machines and an internal network on the cloud provider. With the big oval, we indicate that there is some kind of ownership by the cloud provider of that part of the architecture, which also implies some isolation and control separation.

![cloud deployment](/deploy-images/cloud-deployment.png)

This diagram also shows how the Terraform script results in (is manifested to) actual deployment at the club provider. That is done through the cloud API.

## Continuous integration and delivery

Next up in our journey towards ever deeper automation of software deployment, we have the continuous integration and delivery pipelines. As you might know, a continuous delivery pipeline takes software and other digital assets from a source code repository and builds it into something that can be deployed in an appropriate environment such as a cloud provider.

There are many examples of deployable artifacts. They could be AWS machine images, Docker images, or whatever you can think of. The artifacts are often stored in separate systems, across control boundaries. This is one of the reasons to put them outside of the pipeline.

The diagram shows the three major components, each of which could be under the control of a separate department or even organization. Note also how the diagram poses the question of how the build server (tagged ‘CI CD Pipeline’ in the picture) communicates with the software repository. In practice, there is some kind of trust relationship, where the build server is triggered whenever there is a commit to the repository.

![ci/cd](/deploy-images/cicd.png)
From the perspective of control, we see that this diagram identifies two pieces of data. On the right-hand side, we see the deployable artifact, and on the left-hand side, we see the source code repository. Different groups of people may have responsibility for these. We have taken the liberty to draw the deployable artifact as a kind of document, whereas the source code repository is depicted with the old-fashioned flowchart database symbol: the cylinder or disk. (As a completely irrelevant side note, this symbol might actually have been derived from magnetic drum memory, which ceased to be relevant in the 1960s).

At this point, we may feel the opportunity to combine these diagrams into one huge big diagram that allows us to see each and every detail of our full-blown architecture. It can be done of course. But often it is better to illustrate the architecture with a sequence of simple diagrams.
