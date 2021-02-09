export class Responder {
    answer(question: string): string {
        console.log(question);
        let matcher = question.match(".*what is the sum of (\\d+) and (\\d+)")
        if (matcher) {
            return (parseInt(matcher[1]) + parseInt(matcher[2])).toString();
        }
        return "My Team"
    }
}
