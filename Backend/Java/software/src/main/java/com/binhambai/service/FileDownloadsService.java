package com.binhambai.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.activation.MimetypesFileTypeMap;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@Service
@Slf4j
public class FileDownloadsService {
        public void download2(String path, String fileName, HttpServletResponse response) {
            //本机存放文件的路径
            String filePath =  path.split("/api/mirrors/")[1];

            String relativePath = "/root/software/backen/mirrors/";
            String absolutePath = relativePath + filePath;
            

            System.out.println("absolutePath is " + absolutePath);
            File file = new File(relativePath, fileName);
            if (!file.exists()) {
                return;
            }
            log.info("下载文件:" + absolutePath);
            try {
                response.reset();
                response.setContentType("application/x-download;charset=utf-8");
                response.setHeader("Content-Disposition", "attachment;filename=" + new String(fileName.getBytes("utf-8"), "ISO8859-1"));
                InputStream inStream = new FileInputStream(file);
                ServletOutputStream os = response.getOutputStream();
                FileCopyUtils.copy(inStream, os);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
}
