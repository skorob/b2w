package com.b2wplatform.boot.service.client;


import com.b2wplatform.model.client.Client;
import com.b2wplatform.model.client.ClientLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientLocationReporsitory extends JpaRepository<ClientLocation, Long> {

}
