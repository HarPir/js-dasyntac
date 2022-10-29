module.exports = {
    completed: document.createElement("button"),
    isNotCompleted: document.createElement("button"),
    all: document.createElement("button"),

    buttonsGroup () {
        this.completed.text = "Completed";
        this.completed.id = "Completed";
        this.isNotCompleted.text = "Notcompleted";
        this.isNotCompleted.id = "isNotCompleted";
        this.all.text = "all";
        this.all.id = "all";
    
    }

};


