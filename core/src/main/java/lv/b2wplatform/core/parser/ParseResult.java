package lv.b2wplatform.core.parser;


import lombok.Getter;
import lv.b2wplatform.core.model.entity.Entity;

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
