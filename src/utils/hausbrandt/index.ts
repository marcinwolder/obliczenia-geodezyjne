const fixNumber = (numer: number | string, fix = 3) => {
  return Number(Number(numer).toFixed(fix));
};
const infSum = (
  dataColumns: Matrix[],
  calcForData: (matrix: Matrix) => number,
  fix?: number
) => {
  let sum = 0;
  dataColumns.forEach(({ a, b, c, d }) => {
    sum += fixNumber(calcForData({ a, b, c, d }));
  });
  return sum;
};

export interface Matrix {
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface HausbrandtFuncs {
  f1: number;
  f2: number;
  f0: number;
  simple: {
    lower: {
      1: number;
      2: number;
    };
    upper: {
      1: number;
      2: number;
    };
  };
  quadratic: {
    lower: {
      1: number;
      2: number;
    };
    upper: {
      1: number;
      2: number;
    };
  };
}

export class Hausbrandt {
  private a: number[] = [];
  private b: number[] = [];
  private c: number[] = [];
  private d: number[] = [];

  constructor(a?: number, b?: number, c?: number, d?: number) {
    if (a && b && c && d) {
      this.a = [a];
      this.b = [b];
      this.c = [c];
      this.d = [d];
    }
  }
  setValues = (data: Matrix[]): void => {
    data.forEach((matrix: Matrix) => {
      this.a.push(matrix.a);
      this.b.push(matrix.b);
      this.c.push(matrix.c);
      this.d.push(matrix.d);
    });
  };
  addValues = (a: number, b: number, c: number, d: number): Hausbrandt => {
    [a, b, c, d] = [a, b, c, d].map((x) => fixNumber(x));
    this.a.push(a);
    this.b.push(b);
    this.c.push(c);
    this.d.push(d);
    return this;
  };
  getMatrices = (): Matrix[] => {
    return this.a.map((value, index) => {
      return {
        a: this.a[index],
        b: this.b[index],
        c: this.c[index],
        d: this.d[index],
      };
    });
  };
  calcFunctions = (): HausbrandtFuncs => {
    const dataColumns = this.getMatrices();
    return getFunctionValues(dataColumns);
  };
}
const getFunctionValues = (dataColumns: Matrix[]): HausbrandtFuncs => {
  const f1 = infSum(dataColumns, ({ a, b, c, d }) => {
    return fixNumber(a * d - b * c);
  });
  const f2 = infSum(dataColumns, ({ a, b, c, d }) => {
    return fixNumber(a * c + b * d);
  });
  const f0 = fixNumber(f1 / f2);

  return {
    f1,
    f2,
    f0,
    simple: {
      lower: {
        1: fixNumber(f1 / infSum(dataColumns, ({ c, d }) => c + d)),
        2: fixNumber(f2 / infSum(dataColumns, ({ c, d }) => c + d)),
      },
      upper: {
        1: fixNumber(f1 / infSum(dataColumns, ({ a, b }) => a + b)),
        2: fixNumber(f2 / infSum(dataColumns, ({ a, b }) => a + b)),
      },
    },
    quadratic: {
      lower: {
        1: fixNumber(f1 / infSum(dataColumns, ({ c, d }) => c ** 2 + d ** 2)),
        2: fixNumber(f2 / infSum(dataColumns, ({ c, d }) => c ** 2 + d ** 2)),
      },
      upper: {
        1: fixNumber(f1 / infSum(dataColumns, ({ a, b }) => a ** 2 + b ** 2)),
        2: fixNumber(f2 / infSum(dataColumns, ({ a, b }) => a ** 2 + b ** 2)),
      },
    },
  };
};
