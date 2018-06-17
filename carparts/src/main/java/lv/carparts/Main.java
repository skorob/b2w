package lv.carparts;

import com.b2wplatform.core.parser.ParseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class Main {

    private final static Logger log = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {
        MercedesCarPartsParser mercedesCarPartsParser = new MercedesCarPartsParser();
        ParseResult mercedesParseResult = mercedesCarPartsParser.parse();
        log.info("Mercedes parse result : " + mercedesParseResult.getEntities().size());

        BMWCarPartsParser bmwCarPartsParser = new BMWCarPartsParser();
        ParseResult bmwParseResult = bmwCarPartsParser.parse();
        log.info("BMW parse result : " + bmwParseResult.getEntities().size()+"Errors : {}", bmwParseResult.getErrors());
    }


}
