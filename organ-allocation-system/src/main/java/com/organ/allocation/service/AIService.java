package com.organ.allocation.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@Service
public class AIService {

    public double getSeverity(MultipartFile file) {

        try {
            // ✅ Correct AI endpoint
            String url = "https://fairorganallocation-1.onrender.com/predict";

            RestTemplate restTemplate = new RestTemplate();

            // ✅ Convert file to resource
            ByteArrayResource resource = new ByteArrayResource(file.getBytes()) {
                @Override
                public String getFilename() {
                    return file.getOriginalFilename();
                }
            };

            // ✅ Prepare request body
            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            body.add("file", resource);

            // ✅ Set headers
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);

            HttpEntity<MultiValueMap<String, Object>> requestEntity =
                    new HttpEntity<>(body, headers);

            // ✅ Call AI service
            ResponseEntity<Map> response =
                    restTemplate.postForEntity(url, requestEntity, Map.class);

            // 🔍 Debug log (VERY USEFUL)
            System.out.println("AI RESPONSE: " + response.getBody());

            // ❗ Validate response
            if (response.getBody() == null || response.getBody().get("severity") == null) {
                throw new RuntimeException("Invalid AI response");
            }

            // ✅ Extract severity
            return Double.parseDouble(response.getBody().get("severity").toString());

        } catch (Exception e) {
            // ❗ Print error for debugging
            e.printStackTrace();

            // 🔥 Fallback value (prevents crash)
            System.out.println("Using fallback severity...");

            return 0.5;
        }
    }
}