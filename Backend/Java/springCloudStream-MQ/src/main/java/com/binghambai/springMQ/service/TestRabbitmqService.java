package com.binghambai.springMQ.service;

import com.binghambai.springMQ.mq.TestSendMqMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestRabbitmqService {
    @Autowired
    TestSendMqMessage testSendMqMessage;
    public String testRabbitmqService(String name) {
        testSendMqMessage.testSendMq(name);

        System.out.println("主线程：" + Thread.currentThread());
        for (int i = 0; i < 10; i++) {

        }
        return name;
    }
}
