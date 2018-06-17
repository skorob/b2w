package com.b2wplatform.core.parser;


import lombok.Data;

public @Data
class ParseError {

    private int columnNumber;
    @lombok.Getter @lombok.Setter
    private int rowNumber;
    @lombok.Getter @lombok.Setter
    private String error;

}
