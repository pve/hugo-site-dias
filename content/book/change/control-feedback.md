---
date: '2025-04-19T20:01:07Z'
draft: false
title: 'Control Through Feedback Loops'
weight: 12
---

There are many ways to influence and control a system, but one of the most controlled (pun intended) ways is to use feedback loops.

Let's start with an analogy first: driving a car.

If you want the car to stop as fast as possible, it suffices to push the brakes as hard as you can. But that does not give you much control.
For example, your passengers might not like it, and it leads to wear on the tires.
If you want the car to stop at an intended location, for example just in front of a traffic light, you apply a feedback loop. 

Another example is keeping the car in the proper lane on the road.
Such a loop starts by observing the state: where are we driving? Then we figure out how that differs from the middle of the lane, which is presumably where we want to be driving. Based on that difference (the error) we turn the steering wheel. That is the control we apply. The car will respond, after which we can observe a new state. This closes the loop.
We feed back information from observing the car into the control.

Cars are full of feedback loops. Some are mechanical, some automatic, some have a human in the loop. And some exist outside the car, such as traffic control systems.

We typically want the feedback loops to keep (or bring) the system in a specific state.
In our car example: we want the car to be driving nicely along the highway. 

For the feedback loop to lead to this result the feedback should be negative, meaning that deviations from the desired state are counteracted, instead of amplified.

There is a lot of theory on these types of control systems, for example to figure out if they work fast enough at an acceptable cost.

Let's look at some examples of feedback loops in digital infrastructures.

Large websites have so-called autoscalers. If the load on the website increases, for instance because the website is suddenly in the news, or it is Black Friday on a shopping site, the autoscaler can spin up more webservers to handle that load. 
It acts by observing the webtraffic and the delays in handling that, and controls the amount of servers that are active. 

In the early days of the internet, I advised a retail internet service provider.
At the time, those were independent companies, not part of the telecommunication companies. 
They were growing very rapidly, and as a result they experienced quality issues.
Consumers found that web downloads were too slow, and threatened to leave. 
The cause of this was that the company was not adapting its connection to the internet fast enough. 
That connection was a large part of the cost of running the provider, so they did not want to buy too much too early.
To fix this, I created a control rule through which they could better balance between spending too much on bandwidth and disappointing consumers. 

Feedback also make AI deep learning systems work. The neural network is given a series of training data. The output is checked for correctness, and on the basis of the errors, the weights in the network are adjusted. Repeat this long enough on enough processors, and the errors will drop. The network has then learned.

Feedback loops are everywhere. 
- When you download a large file from a server, the server will adjust its sending rate to whatever the network and the receiver can handle. 
- When a cloud provider gets more customers, it will adjust the server capacity it has, and it will also adapt the staffing of its support center.
- In cybersecurity, we observe the patching level of software components against known vulnerabilities, and update the software as needed.

Understanding feedback loops helps you understand how control can be applied.