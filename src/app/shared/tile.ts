class Tile {
  private position: Position;
  private mergedFrom: Tile;
  private value: number;
  private previousPosition: Position;

  constructor(position: Position, value: number = 0) {
    this.position = position;
    this.value = value;
  }




  // Getters and Setters
  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }

  getMergedFrom(): Tile {
    return this.mergedFrom;
  }

  setMergedFrom(value: Tile): void {
    this.mergedFrom = value;
  }

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  getPreviousPosition(): Position {
    return this.previousPosition;
  }

  setPreviousPosition(value: Position): void {
    this.previousPosition = value;
  }



  // Functions
  savePosition(): void {
    this.previousPosition = new Position(this.position.getX(), this.position.getY());
  }

  updatePosition(position: Position): void {
    this.position = new Position(position.getX(), position.getY());
  }



}
