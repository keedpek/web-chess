import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";

export class Pawn extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (this.color === Colors.BLACK) {
      //capture logic
      if (Math.abs(target.x - this.cell.x) === 1 && target.y - this.cell.y === 1 && target.figure) {
        return true
      }

      //movement for black pawns without capture
      if (target.y < this.cell.y || target.y - this.cell.y > (this.cell.y === 1 ? 2 : 1) || target.figure) {
        return false;
      }

    } else {
      //capture logic
      if (Math.abs(target.x - this.cell.x) === 1 && target.y - this.cell.y === -1 && target.figure) {
        return true
      }

      //movement for white pawns without capture
      if (target.y > this.cell.y || target.x !== this.cell.x || target.y - this.cell.y < (this.cell.y === 6 ? -2 : -1) || target.figure) {
        return false;
      }

    }
    if(this.cell.canMoveVertical(target)) {
      return true;
    }
    return false;
  }
}