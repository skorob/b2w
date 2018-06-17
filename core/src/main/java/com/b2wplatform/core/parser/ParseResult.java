package com.b2wplatform.core.parser;


import com.b2wplatform.core.model.entity.Entity;
import lombok.Getter;

import java.util.List;

public class ParseResult {

    @Getter
    private List<Entity> entities;

    @Getter
    private List<ParseError> errors;

    public ParseResult(List<Entity> entities, List<ParseError> errors) {
        this.entities = entities;
        this.errors = errors;
    }

}
