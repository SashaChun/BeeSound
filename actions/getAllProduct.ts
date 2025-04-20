import client from "../lib/contentful";
import {documentToPlainTextString} from "@contentful/rich-text-plain-text-renderer";

export default async function getAllProduct(){
    const res = await client.getEntries({
        content_type: 'product',
    });

    const entries = res.items.map((item: any) => ({
        id: item.sys.id,
        formFactor: item.fields.formFactor,
        brand: documentToPlainTextString(item.fields.brand),
        modelName: documentToPlainTextString(item.fields.modelName),
        product: documentToPlainTextString(item.fields.product),
        prise: documentToPlainTextString(item.fields.prise),
        photo: item.fields.photo?.[0]?.fields?.file?.url ?? '/placeholder.jpg',
    }));

    return entries;
}