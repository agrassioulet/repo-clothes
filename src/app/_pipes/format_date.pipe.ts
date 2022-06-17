import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'format_date'
})
export class FormatDatePipe implements PipeTransform {

    transform(date: Date): string {
        return this.format(date)
    }


    format(inputDate: Date) {
        console.log('type input date', typeof inputDate)
        console.log('input date', inputDate)

        inputDate = new Date(inputDate)

        let date, month, year;

        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();

        date = date
            .toString()
            .padStart(2, '0');

        month = month
            .toString()
            .padStart(2, '0');

        return `${date}/${month}/${year}`;
    }

}