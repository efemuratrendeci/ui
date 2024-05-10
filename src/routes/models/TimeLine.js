export default class TimeLineDetail {
    constructor(id, img, title, description, date, techStacks, projects, certs) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.projects = projects ?? [];
        this.techStacks = techStacks;
        this.certs = certs;
        this.img = img;
    }
}

export class Project {
    constructor(title, description, tags) {
        this.title = title;
        this.description = description;
        this.tags = tags;
    }
}

export class Certification {
    constructor(title, description, link) {
        this.title = title;
        this.description = description;
        this.link = link;
    }
}