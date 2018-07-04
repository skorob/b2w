package com.b2wplatform.boot.rest;


import com.b2wplatform.boot.service.location.LocationImportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/location")
public class LocationRestService {

    @Autowired
    private LocationImportService locationImportService;

    @GetMapping("/start-import")
    public void startImport() {
        locationImportService.start();

    }

}
