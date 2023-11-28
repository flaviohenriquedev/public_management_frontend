import { ModuleMenu } from "@/components/navigation/module_menu";
import { ModuleRoutes } from "@/data/routes/ModuleRoutes";
import * as S from "./style";

export default function ManagerPage() {
  return (
    <S.Container>
      {ModuleRoutes &&
        ModuleRoutes.map((d) => (
          <ModuleMenu.Card key={d.description}>
            <ModuleMenu.Icon icon={d.icon !== undefined ? d.icon : <></>} />
            <ModuleMenu.Description
              href={d.href !== undefined ? d.href : "#"}
              description={d.description}
            />
          </ModuleMenu.Card>
        ))}
    </S.Container>
  );
}
