export class Matrix {

    private matrixNumbers: string

    constructor(numbers: string) {
        this.matrixNumbers = numbers
    }

    get rows(): number[][] {
        let matrixNumbers = this.matrixNumbers.split("\n")
        let rows: number[][] = []

        for (let number of matrixNumbers) {
            const row = number.trim().split(" ").map(el => Number(el))
            rows.push(row)
        }
        return rows
    }

    get columns(): number[][] {
        const matrix = this.rows
        const columns: number[][] = []


        for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {

            const column: number[] = []

            for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
                column.push(matrix[rowIndex][columnIndex])
            }

            columns.push(column)
        }
        return columns
    }
}