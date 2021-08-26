package com.binghambai.springMQ.mq;

import com.binghambai.springMQ.mq.sink.TestMQSink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.binding.BinderAwareChannelResolver;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@EnableBinding(TestMQSink.class)
@Component
public class TestSendMqMessage {
    @Autowired
    private BinderAwareChannelResolver resolver;

    @Autowired
    private TestMQSink testMQSink;

    public void testSendMq(String msg) {
        testMQSink.outPut().send(new GenericMessage<>(msg));
    }
}
