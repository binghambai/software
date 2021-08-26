package com.binhambai.controller;

import com.binhambai.service.FileDownloadsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
public class FilesDownloadsController {
    @Autowired
    FileDownloadsService fileDownloadsService;


    @RequestMapping("/java/download2")
    public void download2(String path, String fileName, HttpServletResponse response) {
        fileDownloadsService.download2(path, fileName, response);
    }
}
