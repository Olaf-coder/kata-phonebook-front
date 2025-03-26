import {Contact} from "../model/contact.model";

export class ContactsMockService {
    public static contactGetAllMock : Contact[] = [
        {
            id:1,
            firstName:"Jean",
            familyName:"Dujardin",
            phoneNumber:"0123456789",
            email:"jean.dujardin@jardiland.fr"
        },
        {
            id:2,
            firstName:"Alexandra",
            familyName:"Lamy",
            phoneNumber:"0605040302",
            email:"Alexandra.Lamy@gmail.com"
        },

    ]
}