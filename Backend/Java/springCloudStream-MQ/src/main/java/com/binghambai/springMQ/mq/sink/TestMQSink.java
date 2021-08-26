package com.binghambai.springMQ.mq.sink;


import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;

@EnableBinding
public interface TestMQSink {
    String INPUT = "test-mq-name";
    String OUTPUT = "test-mq-name-out";

    @Input(INPUT)
    SubscribableChannel testMQConsumer();

    @Output(OUTPUT)
    MessageChannel outPut();
}
