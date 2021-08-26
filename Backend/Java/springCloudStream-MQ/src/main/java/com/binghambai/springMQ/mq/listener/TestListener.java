package com.binghambai.springMQ.mq.listener;

import com.binghambai.springMQ.mq.sink.TestMQSink;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.Message;

@EnableBinding(TestMQSink.class)
public class TestListener {

    @StreamListener(TestMQSink.INPUT)
    public void testListener(Message<String> message){
        System.out.println("当前线程"+Thread.currentThread());
        System.out.println(message);
        try {
            Thread.sleep(2000);
            System.out.println("监听者结束休眠");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
