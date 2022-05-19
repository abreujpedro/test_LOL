import CustomError from "../../../util/error/CustomError";

const requiredDatas = ( data: unknown[] ) =>
{
    data.forEach( element =>
    {
        if ( !element )
        {
            throw new CustomError( `Invalid null elements`, 400 );
        }
    } );
};

const requiredLength = ( data: string, length: number ) =>
{
    if ( data.length !== length )
    {
        throw new CustomError( `Ivalid element length`, 400 );
    }
};

export { requiredDatas, requiredLength };
