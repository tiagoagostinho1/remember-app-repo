import { useEffect, useState } from "react";
import { Textarea, Button, Group, List } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconArrowRight } from "@tabler/icons-react";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type Memory = {
  code: string;
  title: string;
  date?: Date;
};

export function RememberForm() {
  const [items, setItems] = useState<Memory[]>([]);

  const form = useForm<Memory>({
    mode: "controlled",
    initialValues: { code: "", title: "", date: new Date() },
  });
  const { getToken } = useKindeAuth();
  const onFormSubmit = async function (formSubmittedValues: Memory) {
    //e.preventDefault();
    console.log(formSubmittedValues);

    let mem: Memory = {
      code: "",
      title: formSubmittedValues.title,
      date: formSubmittedValues.date,
    };

    items.push(mem);
    try {
      fetch(
        "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/Memory",
        {
          method: "POST",
          body: JSON.stringify(mem),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
    } catch (error) {}
  };

  useEffect(() => {
    fetch(
      "https://paytently-dev.outsystemsenterprise.com/Tiago_Memoir_API/rest/Memoir/GetList_Memory"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const memories = data.map((dataItem: any) => {
          let newMemories: Memory = {
            code: dataItem.Code,
            title: dataItem.Title,
            date: dataItem.Date,
          };
          return newMemories;
        });
        setItems(memories);
      });
  }, []);

  return (
    <>
      <form onSubmit={form.onSubmit(onFormSubmit)}>
        <Textarea
          {...form.getInputProps("title")}
          label="What to remember"
          placeholder="What to remember"
        />
        <DatePickerInput
          {...form.getInputProps("date")}
          label="Pick date"
          placeholder="Pick date"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>

      <List
        spacing="xs"
        size="sm"
        center
        icon={<IconArrowRight style={{ width: 16, height: 16 }} />}
      >
        {items.map((item: Memory) => (
          <List.Item key={item.code}>
            {item.title} {item.date == null ? "" : " at " + item.date}
          </List.Item>
        ))}
      </List>
    </>
  );
}
