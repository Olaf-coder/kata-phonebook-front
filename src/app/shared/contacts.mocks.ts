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
        {
            id:3,
            firstName:"John",
            familyName:"Doe",
        },
        {
            id:4,
            firstName:"Pascal",
            familyName:"Pedro",
            email:"Pascal.pedro@gmail.com"
        },
        {
            id:5,
            firstName:"Jack",
            familyName:"Black",
            phoneNumber:"0666666666"
        }
    ]

    public static contactToAdd  : Contact = {
        firstName:"Jason",
        familyName:"Momoa"
    }

    public static contactAddMock : Contact[] = [
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
        {
            id:3,
            firstName:"John",
            familyName:"Doe",
        },
        {
            id:4,
            firstName:"Pascal",
            familyName:"Pedro",
            email:"Pascal.pedro@gmail.com"
        },
        {
            id:5,
            firstName:"Jack",
            familyName:"Black",
            phoneNumber:"0666666666"
        },
        {
            id:6,
            firstName:"Jason",
            familyName:"Momoa"
        }
    ]

    public static contactToUpdate : Contact = {
        firstName: "Jack",
        familyName: "L'eventreur"
    }

    public static contactUpdateMock : Contact[] = [
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
        {
            id:3,
            firstName:"John",
            familyName:"Doe",
        },
        {
            id:4,
            firstName:"Pascal",
            familyName:"Pedro",
            email:"Pascal.pedro@gmail.com"
        },
        {
            id:5,
            firstName:"Jack",
            familyName:"L'eventreur",
            phoneNumber:"0666666666"
        }
    ]

    public static contactDeleteMock : Contact[] = [
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
        {
            id:3,
            firstName:"John",
            familyName:"Doe",
        },
        {
            id:5,
            firstName:"Jack",
            familyName:"Black",
            phoneNumber:"0666666666"
        }
    ]

}