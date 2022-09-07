import PopoverBar from "./component/PopoverBar";
import * as S from "./component/PopoverBar/styled";
import React from "react";
import { TData } from "../GroupStackChart/types";
export const typeProficient = new Map([
  ["Proficient", "#88CA22"],
  ["Partially Proficient", "#F5C839"],
  ["Below Proficient", "#ED7092"],
]);
export enum TypeProficient {
  "Proficient" = "#88CA22",
  "Partially Proficient" = "#F5C839",
  "Below Proficient" = "#ED7092",
}
function parseOneClassOneStudentTestScore(data: any) {
  const _oneClassOneStudentTestScoreClone: TData[] = [];
  const _oneClassOneStudentTestScoreCloneMap = data.studentScores.find(
    (item: any) => {
      return item.displayName == "student 10";
    }
  );
  _oneClassOneStudentTestScoreCloneMap?.domainScores
    .sort((a: any, b: any) => b.percentageScore - a.percentageScore)
    .forEach((item: any) => {
      _oneClassOneStudentTestScoreClone.push({
        legendGroup: item.domainName,
        valueGroup: [
          {
            valueBar: [
              {
                percentage: item.percentageScore,
                info: item,
              },
            ],
          },
        ],
      });
    });

  return _oneClassOneStudentTestScoreClone;
}

function parseOneClassAllStudentsTestScore(data: any) {
  const _oneClassAllStudentsTestScoreClone: TData[] = [];
  for (const studentScore of data.studentScores) {
    _oneClassAllStudentsTestScoreClone.push({
      legendGroup: studentScore.displayName,
      valueGroup: [
        {
          valueBar: getStackOneClassAllStudent(studentScore),
        },
      ],
    });
    // }
  }

  function getStackOneClassAllStudent(data: any) {
    return data.domainScores.map((item: any, idx: any) => {
      return {
        percentage: item.percentageScore,
        title: <S.Title>{data.displayName}</S.Title>,
        content: (
          <PopoverBar
            description={item.domainName}
            proficiencyLevel={item.proficiencyLevel}
            score={item.percentageScore}
            color={TypeProficient[item.proficiencyLevel]}
          />
        ),
        info: item,
      };
    });
  }
  return _oneClassAllStudentsTestScoreClone;
}

function parseAllClassesGrowth(data: any) {
  const mapKeys = new Map();
  data.forEach((d: any) => {
    d.classesScores.forEach((c: any) => {
      if (mapKeys.has(c.classId)) {
        mapKeys.set(c.classId, mapKeys.get(c.classId) + 1);
      }
      if (!mapKeys.has(c.classId)) {
        mapKeys.set(c.classId, 1);
      }
    });
  });

  const _data = data.map((item: any) => {
    const a = item.classesScores.filter((c: any) => {
      return mapKeys.get(c.classId) === data.length;
    });
    return {
      ...item,
      classesScores: a,
    };
  });

  const _groupStackData: TData[] = [];
  for (
    let i = 0, lengthGroup = _data[0].classesScores.length;
    i < lengthGroup;
    i++
  ) {
    let growth = _data[0].classesScores[i].score;
    const firstItemBar = _data[0].classesScores[i];
    for (let j = 1, lengthBar = _data.length; j < lengthBar; j++) {
      growth = _data[j].classesScores[i].score - growth;

      const nthItemBar = _data[j].classesScores[i];
      _groupStackData.push({
        legendGroup: firstItemBar.className,
        valueGroup: [
          {
            valueBar: getStackItemGroupStack(firstItemBar),
            legendBar: "Moy",
          },
          {
            valueBar: getStackItemGroupStack(nthItemBar),
            legendBar: "Boy",
          },
        ],
        growth: {
          value: growth,
          title: <S.Title>Class: {firstItemBar.className}</S.Title>,
          content: (
            <>
              <p>Growth: {growth}%</p>
              <S.Link>Skills Proficiency</S.Link>
            </>
          ),
        },
      });
    }
  }

  function getStackItemGroupStack(_data: any) {
    return _data.domainScores.map((item: any, index: any) => {
      return {
        percentage: item.percentageScore,
        info: item,
      };
    });
  }

  return _groupStackData;
}

function parseAllClassesTestScore(data: any) {
  const _allClassesTestScoreClone: TData[] = [];
  for (const classesScore of data.classesScores) {
    for (let j = 0, lengthBar = 1; j < lengthBar; j++) {
      _allClassesTestScoreClone.push({
        legendGroup: classesScore.className,
        valueGroup: [
          {
            valueBar: getStackItemStackData(classesScore),
          },
        ],
      });
    }
  }
  function getStackItemStackData(data: any) {
    return data.domainScores.map((item: any, idx: any) => {
      return {
        percentage: item.percentageScore,
        title: <S.Title>{data.className}</S.Title>,
        content: (
          <PopoverBar
            teacher={data.teacher.camelFirstLastName}
            description={item.domainName}
            color={TypeProficient[item.proficiencyLevel]}
            proficiencyLevel={item.proficiencyLevel}
            score={item.percentageScore}
          />
        ),
        info: item,
      };
    });
  }

  return _allClassesTestScoreClone;
}

export {
  parseAllClassesGrowth,
  parseOneClassAllStudentsTestScore,
  parseOneClassOneStudentTestScore,
  parseAllClassesTestScore,
};
