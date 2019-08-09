import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './../models/company'

export class CompaniesData implements InMemoryDbService {

    createDb() {
        const companies: Company[] = [

            { id: 1, "name": "Eare", "brand": "Engineering", "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "img": "" },
            { id: 2, "name": "Pixonyx", "brand": "Human Resources", "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.", "img": "" },
            { id: 3, "name": "Muxo", "brand": "Legal", "description": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "img": "" },
            { id: 4, "name": "Tazzy", "brand": "Support", "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.", "img": "" },
            { id: 5, "name": "Devcast", "brand": "Business Development", "description": "Donec dapibus.", "img": "" },
            { id: 6, "name": "Browsedrive", "brand": "Training", "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.", "img": "" },
            { id: 7, "name": "Centizu", "brand": "Marketing", "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.", "img": "" },
            { id: 8, "name": "Chatterbridge", "brand": "Business Development", "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.", "img": "" },
            { id: 9, "name": "Rhybox", "brand": "Sales", "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.", "img": "" },
            { id: 10, "name": "Fatz", "brand": "Marketing", "description": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "img": "" }

        ];

        return { companies }
    }

}
