let sentenceBuilder = {
    subject: "I",    
    verb: "am",    
    object: "coding",

    
    buildSentence: function () { 
        return this.subject && this.verb && this.object?this.subject+" "+this.verb+" "+this.object:"Incomplete sentence";

    },

    updateProperty: function (property, value) { 
        if(this.hasOwnProperty(property)){
            this[property]=value;
        }
        else{
            return "Invalid property";
        }
    }
}


console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("verb", "am learning")
console.log(sentenceBuilder.buildSentence())
sentenceBuilder.updateProperty("subject", "The cat is")
console.log(sentenceBuilder.buildSentence())
console.log(sentenceBuilder.updateProperty("mood", "happy"));
sentenceBuilder.updateProperty("verb", ""); 
console.log(sentenceBuilder.buildSentence());