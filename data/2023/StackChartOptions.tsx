import colours from "./Colours.json";
import EveryBoysData from "./EveryTimeLineBoys.json";
import EveryGirlsData from "./EveryTimeLineGirls.json";
import BoysData from "./TimeLineBoys.json";
import GirlsData from "./TimeLineGirls.json";
interface ITimeLineData {
  name: string;
  type: string;
  stack: string;
  data: ICountReturn[];
  smooth: boolean;
  color: string;
  markArea?: {
    itemStyle: {
      color: string;
    };
    data: [
      [
        {
          name: string;
          xAxis: string;
        }
      ]
    ];
  };
}

interface ICountReturn {
  partner: string;
  length: number;
}

interface IXData {
  name: string;
  type: string;
  stack: string;
  barWidth?: string
  label: {
    show: boolean;
  };
  emphasis: {
    focus: string;
  };
  itemStyle: {
    borderColor: string;
    color: string;
  };
  data: any[];
}

let casaAmor: any = {
  name: "Casa Amor",
  type: "line",
  smooth: true,
  // prettier-ignore
  markArea: {
    itemStyle: {
      color: 'rgba(255, 173, 177, 0.4)'
    },
    data: [
      [
        {
          name: 'Casa Amor',
          label: {
            show: true
          },
          xAxis: '23'
        },
        {
          xAxis: '27'
        }
      ]
    ]
  },
};

const StackChartXAxisData = (props: ITimeLineData[]) => {
  let series: IXData[] = [];
  for (let i = 0; i < props.length; i++) {
    let defaultData: string[] = [];
    for (let j = 0; j < i; j++) {
      defaultData.push("-");
    }

    props[i].data.map((partner) => {
      if (partner.partner === "-" || partner.partner === "Exit") {
        series.push({
          name: partner.partner,
          label: {
            show: true,
          },
          type: "bar",
          stack: props[i].stack,
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          data: [...defaultData, partner.length],
        });
      } else {
        series.push({
          name: partner.partner,
          label: {
            show: true,
          },
          type: "bar",
          stack: props[i].stack,
          emphasis: {
            focus: "series",
          },
          itemStyle: {
            borderColor: addColours(`${partner.partner}`),
            color: addColours(`${partner.partner}`),
          },
          barWidth: '80%',
          data: [...defaultData, partner.length],
        });
      }
    });
  }

  return series;
};

const StackChartYAxisData = (props: ITimeLineData[]) => {
  let series: string[] = [];
  props.map((data) => {
    series.push(data.name);
  });
  return series;
};

export const girlsOptions: any = {
  animation: true,
  animationDuration: 1500,
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
      },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

      info.map((data: any) => {
        if (
          data.data === "-" ||
          data.seriesName === "" ||
          data.seriesName === "-" ||
          data.seriesName === "Exit"
        ) {
          return;
        }
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
          ${innerHtml}`;
    },
  },
  legend: {
    show: true,
    data: [
      {
        name: "Casa Amor",
        // compulsorily set icon as a circle
        icon: "circle",
      },
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: StackChartYAxisData(GirlsData),
  },
  label: {
    formatter: (value: any) => {
      let stringData = `${value.seriesName}`;
      if (value.seriesName === "-" || value.seriesName === "Exit") {
        return "";
      } else if (value.seriesName === null) {
        return "Casa Amor";
      }
      return stringData;
    },
    fontSize: 10,
  },
  labelLayout: {
    hideOverlap: true,
  },
  series: [...StackChartXAxisData(GirlsData), casaAmor],
};

export const boysOptions: any = {
  animation: true,
  animationDuration: 1500,
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
      },
      // restore: {
      //   show: true,
      // },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

      info.map((data: any) => {
        if (
          data.data === "-" ||
          data.seriesName === "" ||
          data.seriesName === "-" ||
          data.seriesName === "Exit"
        ) {
          return;
        }
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
          ${innerHtml}`;
    },
  },
  legend: {
    show: true,
    data: [
      {
        name: "Casa Amor",
        // compulsorily set icon as a circle
        icon: "circle",
      },
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: StackChartYAxisData(BoysData),
  },
  label: {
    formatter: (value: any) => {
      let stringData = `${value.seriesName}`;
      if (value.seriesName === "-" || value.seriesName === "Exit") {
        return "";
      } else if (value.seriesName === null) {
        return "Casa Amor";
      }
      return stringData;
    },
    // fontSize: 10
  },
  labelLayout: {
    hideOverlap: true,
  },
  series: [...StackChartXAxisData(BoysData), casaAmor],
};

export const everyGirlsOptions: any = {
  animation: true,
  animationDuration: 1500,
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
      },
      // restore: {
      //   show: true,
      // },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

      info.map((data: any) => {
        if (
          data.data === "-" ||
          data.seriesName === "" ||
          data.seriesName === "-" ||
          data.seriesName === "Exit"
        ) {
          return;
        }
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
          ${innerHtml}`;
    },
  },
  legend: {
    show: true,
    data: [
      {
        name: "Casa Amor",
        // compulsorily set icon as a circle
        icon: "circle",
      },
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: StackChartYAxisData(EveryGirlsData),
  },
  label: {
    formatter: (value: any) => {
      let stringData = `${value.seriesName}`;
      if (value.seriesName === "-" || value.seriesName === "Exit") {
        return "";
      } else if (value.seriesName === null) {
        return "Casa Amor";
      }
      return stringData;
    },
    fontSize: 10,
  },
  labelLayout: {
    hideOverlap: true,
  },
  series: [...StackChartXAxisData(EveryGirlsData), casaAmor],
};


export const everyBoysOptions: any = {
  animation: true,
  animationDuration: 1500,
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
      },
      // restore: {
      //   show: true,
      // },
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (info: any) => {
      let innerHtml = `<b style="text-align:center">${info[0].axisValue}:</b><br/><table id="myTable" border="1" cellpadding="3">`;

      info.map((data: any) => {
        if (
          data.data === "-" ||
          data.seriesName === "" ||
          data.seriesName === "-" ||
          data.seriesName === "Exit"
        ) {
          return;
        }
        innerHtml +=
          `<tr>` +
          `<td ">${data.seriesName}</td>` +
          `<td ">${Math.round(data.data)} </td>` +
          "</tr>";
      });
      innerHtml += "</table>";
      return `
          ${innerHtml}`;
    },
  },
  legend: {
    show: true,
    data: [
      {
        name: "Casa Amor",
        // compulsorily set icon as a circle
        icon: "circle",
      },
    ],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: StackChartYAxisData(EveryBoysData),
  },
  label: {
    formatter: (value: any) => {
      let stringData = `${value.seriesName}`;
      if (value.seriesName === "-" || value.seriesName === "Exit") {
        return "";
      } else if (value.seriesName === null) {
        return "Casa Amor";
      }
      return stringData;
    },
    fontSize: 10,
  },
  labelLayout: {
    hideOverlap: true,
  },
  series: [...StackChartXAxisData(EveryBoysData), casaAmor],
};

function addColours(name: string): string {
  let newColour = "";
  colours.map((k) => {
    if (k.name === name) {
      newColour = k.colour;
    }
  });

  return newColour;
}
