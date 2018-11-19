
/*
You have to extract a portion of the file name as follows:
    Assume it will start with date represented as long number
    Followed by an underscore
    Youll have then a filename with an extension
    it will always have an extra extension at the end

1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION --> FILE_NAME.EXTENSION
1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34 --> This_is_an_otherExample.mpg

*/

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let res=(dirtyFileName.replace(/^[0-9]*_/gi,"")).toString();
        let point_index=res.indexOf('.', res.indexOf('.')+1); 
        res=res.substring(0,point_index);
        return res;
    }
}