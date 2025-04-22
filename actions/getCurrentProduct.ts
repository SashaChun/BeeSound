import { createClient } from 'contentful';
import client from "../lib/contentful";
import {documentToPlainTextString} from "@contentful/rich-text-plain-text-renderer";

export const fetchProductByName = async (name: string) => {
    const response = await client.getEntries({
        content_type: 'product', // Замініть на ваш тип контенту
        'sys.id': name, // Фільтрація за полем 'name'
    });

    const entries = response.items.map((item: any) => ({
        id: item.sys.id,
        formFactor: item.fields.formFactor,
        brand: documentToPlainTextString(item.fields.brand),
        modelName: documentToPlainTextString(item.fields.modelName),
        product: documentToPlainTextString(item.fields.product),
        prise: documentToPlainTextString(item.fields.prise),
        photos: item.fields.photo?.map((asset: any) =>
            `https:${asset.fields?.file?.url}`
        ) ?? ['/placeholder.jpg'],
        connectivityTechnology: item.fields.connectivityTechnology
    }));

    return entries;
};
