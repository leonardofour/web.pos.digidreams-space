"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Overlay,
  ModalWrapper,
  Title,
  InputWrapper,
  Label,
  SuggestionsList,
  SuggestionItem,
  IconClose,
  DatePickerWrapper,
  DatePickerOverlay,
  DatePickerModal,
  CalendarHeader,
  CalendarGrid,
  CalendarDay,
  TimeSection,
  TimeInput,
  CalendarNavButton,
  MonthYearSelector,
  CalendarActions,
  CalendarNavButtonWrapper,
  Days,
  TImeInputWrapper,
  CalendarIconWrapper,
  TimeDot,
  TagWrapper,
  TagItems,
  TagSelected,
  ModalContent,
  DrinkWrapper,
  DrinkContent,
  LabelDrink,
  OrderSummaryWrapper,
  OrderSummaryItem,
  OrderSummaryItemName,
  OrderSummaryItemPrice,
  OrderSummaryTotal,
  OrderSummaryTotalLabel,
  OrderSummaryTotalPrice,
  CountWrapper,
  Quantity,
  CountMinusButton,
  CountPlusButton,
} from "./input-modal.styled";
import { Button } from "../button";
import { getIcon } from "@/types/icons";
import { customersDummy } from "@/lib/data/dummy-data-customers";
import { packageDummy } from "@/lib/data/dummy-data-package";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { Tabs } from "../tabs/tabs";
import { TextInput } from "../input/input-text";
import { useThemeContext } from "@/lib/provider/theme-provider/theme-provider";
import Text from "../text/text";
import Image from "next/image";
import { Package, Drink, Food } from "@/types/category";
import {
  foodDummy,
  snackDummy,
  coffeeDummy,
  otherDummy,
  teaDummy,
} from "@/lib/data/dummy-data-food-drink";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/lib/api/user";

type Customer = {
  id: number;
  name: string;
  phone: string;
};

type DrinkSelection = {
  drink: Drink;
  variant: "small" | "large";
  quantity: number;
};

type FoodSelection = {
  food: Food;
  quantity: number;
};

type OrderItem = {
  name: string;
  price: number;
  type: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    phone: string;
    date: string;
    selectedPackage: Package;
    selectedDrinks?: DrinkSelection[];
    selectedFoods?: FoodSelection[];
    pic: string;
    totalPrice: number;
  }) => void;
};

type TimeState = {
  hour: string;
  minute: string;
};

const extractPrice = (priceString: string): number => {
  const match = priceString.match(/[\d,]+/);
  if (match) {
    return parseInt(match[0].replace(/,/g, ""));
  }
  return 0;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const DAY_NAMES = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const createDefaultDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// Fungsi untuk membuat default time state
const createDefaultTime = (): TimeState => {
  const now = new Date();
  return {
    hour: now.getHours().toString().padStart(2, "0"),
    minute: now.getMinutes().toString().padStart(2, "0"),
  };
};

const formatDateWithDay = (dateString: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const dayName = DAY_NAMES[date.getDay()];
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${dayName}, ${day}/${month}/${year} ${hours}:${minutes}`;
};

const validateTimeInput = (type: "hour" | "minute", value: string): string => {
  const cleanValue = value.replace(/\D/g, "").slice(0, 2);
  const numValue = parseInt(cleanValue);

  if (type === "hour" && numValue > 23) return "23";
  if (type === "minute" && numValue > 59) return "59";

  return cleanValue;
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const InputModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const { data: userData } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const userName = userData?.user?.displayName || "User";

  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(createDefaultDate()); 
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<TimeState>(createDefaultTime());
  
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { theme } = useThemeContext();
  const [selectedFoods, setSelectedFoods] = useState<FoodSelection[]>([]);
  const [selectedDrinks, setSelectedDrinks] = useState<DrinkSelection[]>([]);
  const [activeTab2, setActiveTab2] = useState("label1");
  const [activeDrinkTab, setActiveDrinkTab] = useState("coffee");

  const simpleTabs = [
    { id: "label1", label: "Food" },
    { id: "label2", label: "Snack" },
  ];

  const drinkTabs = [
    { id: "coffee", label: "Coffee" },
    { id: "tea", label: "Tea" },
    { id: "other", label: "Other" },
  ];

  const selectedFoodItems = activeTab2 === "label1" ? foodDummy : snackDummy;

  const selectedDrinkItems = useMemo(() => {
    switch (activeDrinkTab) {
      case "coffee":
        return coffeeDummy;
      case "tea":
        return teaDummy;
      case "other":
        return otherDummy;
      default:
        return coffeeDummy;
    }
  }, [activeDrinkTab]);

  const totalPrice = useMemo(() => {
    let total = 0;

    selectedFoods.forEach((selection) => {
      total += extractPrice(selection.food.price) * selection.quantity;
    });

    selectedDrinks.forEach((selection) => {
      total +=
        extractPrice(selection.drink.variants[selection.variant].price) *
        selection.quantity;
    });

    return total;
  }, [selectedFoods, selectedDrinks]);

  const selectedItems = useMemo(() => {
    const items: OrderItem[] = [];

    selectedFoods.forEach((selection) => {
      items.push({
        name: `${selection.food.name} (${selection.quantity}x)`,
        price: extractPrice(selection.food.price) * selection.quantity,
        type: activeTab2 === "label1" ? "food" : "snack",
      });
    });

    selectedDrinks.forEach((selection) => {
      const variant = activeDrinkTab !== "tea" ? ` (${selection.variant})` : "";
      items.push({
        name: `${selection.drink.name}${variant} (${selection.quantity}x)`,
        price:
          extractPrice(selection.drink.variants[selection.variant].price) *
          selection.quantity,
        type: "drink",
      });
    });

    return items;
  }, [selectedFoods, selectedDrinks, activeTab2, activeDrinkTab]);

  const inputRef = useRef<HTMLInputElement>(null);
  const isSelectingRef = useRef(false);

  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = Array(firstDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }, [currentMonth, currentYear]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (
        selectedCustomer &&
        value !== `${selectedCustomer.name} - ${selectedCustomer.phone}`
      ) {
        setSelectedCustomer(null);
      }
    },
    [selectedCustomer]
  );

  const handleSelect = useCallback((cust: Customer) => {
    isSelectingRef.current = true;
    setInputValue(`${cust.name} - ${cust.phone}`);
    setSelectedCustomer(cust);
    setIsFocused(false);
    setFiltered([]);

    setTimeout(() => {
      isSelectingRef.current = false;
      inputRef.current?.focus();
    }, 0);
  }, []);

  const handlePackageSelect = useCallback((pkg: Package) => {
    setSelectedPackage((prev) => (prev?.id === pkg.id ? null : pkg));
  }, []);

  const handleFoodSelect = useCallback((food: Food) => {
    setSelectedFoods((prev) => {
      const existingIndex = prev.findIndex((item) => item.food.id === food.id);

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      } else {
        return [...prev, { food, quantity: 1 }];
      }
    });
  }, []);

  const handleFoodRemove = useCallback((foodId: number) => {
    setSelectedFoods((prev) => {
      const existingIndex = prev.findIndex((item) => item.food.id === foodId);

      if (existingIndex >= 0) {
        const updated = [...prev];
        if (updated[existingIndex].quantity > 1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity - 1,
          };
        } else {
          updated.splice(existingIndex, 1);
        }
        return updated;
      }
      return prev;
    });
  }, []);

  const handleDrinkSelect = useCallback(
    (drink: Drink, variant: "small" | "large") => {
      setSelectedDrinks((prev) => {
        const existingIndex = prev.findIndex(
          (item) => item.drink.id === drink.id && item.variant === variant
        );

        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + 1,
          };
          return updated;
        } else {
          return [...prev, { drink, variant, quantity: 1 }];
        }
      });
    },
    []
  );

  const handleDrinkRemove = useCallback(
    (drinkId: number, variant: "small" | "large") => {
      setSelectedDrinks((prev) => {
        const existingIndex = prev.findIndex(
          (item) => item.drink.id === drinkId && item.variant === variant
        );

        if (existingIndex >= 0) {
          const updated = [...prev];
          if (updated[existingIndex].quantity > 1) {
            updated[existingIndex] = {
              ...updated[existingIndex],
              quantity: updated[existingIndex].quantity - 1,
            };
          } else {
            updated.splice(existingIndex, 1);
          }
          return updated;
        }
        return prev;
      });
    },
    []
  );

  const isFoodSelected = useCallback(
    (foodId: number) => {
      return selectedFoods.some((item) => item.food.id === foodId);
    },
    [selectedFoods]
  );

  const isDrinkSelected = useCallback(
    (drinkId: number, variant: "small" | "large") => {
      return selectedDrinks.some(
        (item) => item.drink.id === drinkId && item.variant === variant
      );
    },
    [selectedDrinks]
  );

  const getFoodQuantity = useCallback(
    (foodId: number) => {
      const item = selectedFoods.find((item) => item.food.id === foodId);
      return item ? item.quantity : 0;
    },
    [selectedFoods]
  );

  const getDrinkQuantity = useCallback(
    (drinkId: number, variant: "small" | "large") => {
      const item = selectedDrinks.find(
        (item) => item.drink.id === drinkId && item.variant === variant
      );
      return item ? item.quantity : 0;
    },
    [selectedDrinks]
  );

  const handleTimeChange = useCallback(
    (type: "hour" | "minute", value: string) => {
      setSelectedTime((prev) => ({
        ...prev,
        [type]: validateTimeInput(type, value),
      }));
    },
    []
  );

  const handleDateConfirm = useCallback(() => {
    if (!selectedDay) return;

    const paddedHour = selectedTime.hour.padStart(2, "0");
    const paddedMinute = selectedTime.minute.padStart(2, "0");
    const dateStr = `${currentYear}-${(currentMonth + 1)
      .toString()
      .padStart(2, "0")}-${selectedDay
      .toString()
      .padStart(2, "0")}T${paddedHour}:${paddedMinute}`;

    setSelectedDate(dateStr);
    setIsDatePickerOpen(false);
  }, [selectedDay, selectedTime, currentMonth, currentYear]);

  const handleNavigation = useCallback(
    (direction: "prev" | "next") => {
      if (direction === "prev") {
        if (currentMonth === 0) {
          setCurrentMonth(11);
          setCurrentYear((prev) => prev - 1);
        } else {
          setCurrentMonth((prev) => prev - 1);
        }
      } else {
        if (currentMonth === 11) {
          setCurrentMonth(0);
          setCurrentYear((prev) => prev + 1);
        } else {
          setCurrentMonth((prev) => prev + 1);
        }
      }
    },
    [currentMonth]
  );

  const handleToday = useCallback(() => {
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
    setSelectedDay(now.getDate());
    setSelectedTime({
      hour: now.getHours().toString().padStart(2, "0"),
      minute: now.getMinutes().toString().padStart(2, "0"),
    });
  }, []);

  const handleClear = useCallback(() => {
    setSelectedDay(null);
    setSelectedDate("");
    setSelectedTime(createDefaultTime());
  }, []);

  const handleCreate = useCallback(() => {
    if (!selectedCustomer || !selectedDate || !selectedPackage) return;

    onSubmit({
      name: selectedCustomer.name,
      phone: selectedCustomer.phone,
      date: selectedDate,
      selectedPackage,
      selectedDrinks: selectedDrinks.length > 0 ? selectedDrinks : undefined,
      selectedFoods: selectedFoods.length > 0 ? selectedFoods : undefined,
      pic: userName,
      totalPrice,
    });

    setInputValue("");
    setSelectedCustomer(null);
    setSelectedDate(createDefaultDate()); 
    setSelectedPackage(null);
    setSelectedFoods([]);
    setSelectedDrinks([]);
    setFiltered([]);
    
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
    setSelectedDay(now.getDate());
    setSelectedTime(createDefaultTime());
    
    onClose();
  }, [
    selectedCustomer,
    selectedDate,
    selectedPackage,
    selectedDrinks,
    selectedFoods,
    userName,
    totalPrice,
    onSubmit,
    onClose,
  ]);

  useEffect(() => {
    if (isOpen) {
      setInputValue("");
      setSelectedCustomer(null);
      setSelectedDate(createDefaultDate());
      setSelectedPackage(null);
      setSelectedFoods([]);
      setSelectedDrinks([]);
      setFiltered([]);
      
      const now = new Date();
      setCurrentMonth(now.getMonth());
      setCurrentYear(now.getFullYear());
      setSelectedDay(now.getDate());
      setSelectedTime(createDefaultTime());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!inputValue.trim()) {
      setFiltered([]);
      return;
    }

    const timeout = setTimeout(() => {
      setFiltered(
        customersDummy.filter(
          (cust) =>
            cust.name.toLowerCase().startsWith(inputValue.toLowerCase()) ||
            cust.phone.startsWith(inputValue)
        )
      );
    }, 200);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <Title>
          <Text variant="title" level={1}>
            Create New Order
          </Text>
          <IconClose onClick={onClose}>
            <Image src={getIcon("close", theme)} alt="close" width={20} height={20} />
          </IconClose>
        </Title>
        <ModalContent>
          <InputWrapper>
            <Label>
              <Text variant="subtitle" level={3}>
                Order Date & Time
              </Text>
            </Label>
            <DatePickerWrapper>
              <TextInput
                label=""
                placeholder="Pilih tanggal dan waktu"
                caption=""
                value={selectedDate ? formatDateWithDay(selectedDate) : ""}
                readOnly
                onClick={() => setIsDatePickerOpen(true)}
                style={{ cursor: "pointer" }}
              />
              <CalendarIconWrapper>
                <Image
                  src={CalendarIcon}
                  alt="calendar"
                  width={20}
                  height={20}
                />
              </CalendarIconWrapper>
            </DatePickerWrapper>
          </InputWrapper>

          {isDatePickerOpen && (
            <DatePickerOverlay onClick={() => setIsDatePickerOpen(false)}>
              <DatePickerModal onClick={(e) => e.stopPropagation()}>
                <CalendarHeader>
                  <MonthYearSelector>
                    {MONTHS[currentMonth]} {currentYear}
                  </MonthYearSelector>
                  <CalendarNavButtonWrapper>
                    <CalendarNavButton onClick={() => handleNavigation("prev")}>
                      <Text>‹</Text>
                    </CalendarNavButton>
                    <CalendarNavButton onClick={() => handleNavigation("next")}>
                      <Text>›</Text>
                    </CalendarNavButton>
                  </CalendarNavButtonWrapper>
                </CalendarHeader>

                <CalendarGrid>
                  {DAYS.map((day, index) => (
                    <Days key={`day-${index}`}>
                      <Text variant="body" level={3}>
                        {day}
                      </Text>
                    </Days>
                  ))}
                  {calendarDays.map((day, index) => (
                    <CalendarDay
                      key={`day-${index}`}
                      onClick={() => day && setSelectedDay(day)}
                      $isSelected={day === selectedDay}
                      $isEmpty={!day}
                      $isToday={
                        day === today.getDate() &&
                        currentMonth === today.getMonth() &&
                        currentYear === today.getFullYear()
                      }
                    >
                      <Text variant="body" level={3}>
                        {day}
                      </Text>
                    </CalendarDay>
                  ))}
                </CalendarGrid>

                <TimeSection>
                  <TImeInputWrapper>
                    <TimeInput
                      type="number"
                      min="0"
                      max="23"
                      value={selectedTime.hour}
                      onChange={(e) => handleTimeChange("hour", e.target.value)}
                    />
                    <TimeDot>
                      <Text variant="body" level={4}>
                        :
                      </Text>
                    </TimeDot>
                    <TimeInput
                      type="number"
                      min="0"
                      max="59"
                      value={selectedTime.minute}
                      onChange={(e) =>
                        handleTimeChange("minute", e.target.value)
                      }
                    />
                  </TImeInputWrapper>
                </TimeSection>

                <CalendarActions>
                  <Button variant="nude" onClick={handleClear}>
                    <Text variant="body" level={4}>
                      Clear
                    </Text>
                  </Button>
                  <Button variant="nude" onClick={handleToday}>
                    <Text variant="body" level={4}>
                      Today
                    </Text>
                  </Button>
                  <Button variant="filled" onClick={handleDateConfirm}>
                    <Text variant="body" level={4}>
                      OK
                    </Text>
                  </Button>
                </CalendarActions>
              </DatePickerModal>
            </DatePickerOverlay>
          )}

          <InputWrapper>
            <Label>
              <Text variant="subtitle" level={3}>
                Customer Name
              </Text>
            </Label>
            <TextInput
              ref={inputRef}
              label=""
              placeholder="Search Customers"
              caption=""
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                if (!isSelectingRef.current) {
                  setTimeout(() => setIsFocused(false), 150);
                }
              }}
            />

            {isFocused && inputValue.trim() && !selectedCustomer && (
              <SuggestionsList>
                {filtered.length > 0
                  ? filtered.map((cust) => (
                      <SuggestionItem
                        key={cust.id}
                        onMouseDown={() => {
                          isSelectingRef.current = true;
                          handleSelect(cust);
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        {cust.name} - {cust.phone}
                      </SuggestionItem>
                    ))
                  : inputValue && (
                      <SuggestionItem
                        style={{ cursor: "default", color: "#999" }}
                      >
                        No matching customer
                      </SuggestionItem>
                    )}
              </SuggestionsList>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label>
              <Text variant="subtitle" level={3}>
                PIC
              </Text>
            </Label>
            <TextInput
              label=""
              placeholder=""
              caption=""
              value={userName}
              disabled={true}
              readOnly={true}
              style={{
                backgroundColor: "#f5f5f5",
                cursor: "not-allowed",
                opacity: 0.7,
              }}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>
              <Text variant="subtitle" level={3}>
                Packages
              </Text>
            </Label>
            <TagWrapper>
              {packageDummy.map((pkg: Package) => {
                const isSelected = selectedPackage?.id === pkg.id;
                return (
                  <TagItems
                    key={pkg.id}
                    onClick={() => handlePackageSelect(pkg)}
                    $isSelected={isSelected}
                  >
                    <Text variant="body" level={3}>
                      {pkg.name}
                    </Text>
                  </TagItems>
                );
              })}
            </TagWrapper>

            {selectedPackage && (
              <TagSelected>
                <Text variant="body" level={5}>
                  Selected: {selectedPackage.name}
                </Text>
              </TagSelected>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label>
              <Tabs
                tabs={drinkTabs}
                activeTab={activeDrinkTab}
                onTabChange={setActiveDrinkTab}
                variant="contained"
              />
            </Label>
            <TagWrapper>
              {selectedDrinkItems.map((drink: Drink) => (
                <DrinkWrapper key={drink.id}>
                  <LabelDrink>
                    <Text variant="body" level={3}>
                      {drink.name}
                    </Text>
                  </LabelDrink>
                  <DrinkContent>
                    {activeDrinkTab === "tea" ? (
                      <TagItems
                        onClick={() => {
                          if (!isDrinkSelected(drink.id, "small")) {
                            handleDrinkSelect(drink, "small");
                          }
                        }}
                        $isSelected={isDrinkSelected(drink.id, "small")}
                      >
                        <Text variant="body" level={3}>
                          {drink.variants.small.price}
                        </Text>
                        {isDrinkSelected(drink.id, "small") && (
                          <CountWrapper>
                            <CountMinusButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDrinkRemove(drink.id, "small");
                              }}
                            >
                              <Image
                                src={getIcon("min", theme)}
                                width={35}
                                height={35}
                                alt="min"
                              />
                            </CountMinusButton>
                            <Quantity>
                              <Text variant="body" level={3}>
                                {getDrinkQuantity(drink.id, "small")}
                              </Text>
                            </Quantity>
                            <CountPlusButton
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDrinkSelect(drink, "small");
                              }}
                            >
                              <Image
                                src={getIcon("plus", theme)}
                                width={35}
                                height={35}
                                alt="plus"
                              />
                            </CountPlusButton>
                          </CountWrapper>
                        )}
                      </TagItems>
                    ) : (
                      <>
                        <TagItems
                          onClick={() => {
                            if (!isDrinkSelected(drink.id, "small")) {
                              handleDrinkSelect(drink, "small");
                            }
                          }}
                          $isSelected={isDrinkSelected(drink.id, "small")}
                        >
                          <Text variant="body" level={3}>
                            Small - {formatCurrency(extractPrice(drink.variants.small.price))}
                          </Text>
                          {isDrinkSelected(drink.id, "small") && (
                            <CountWrapper>
                              <CountMinusButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDrinkRemove(drink.id, "small");
                                }}
                              >
                                <Image
                                  src={getIcon("min", theme)}
                                  width={35}
                                  height={35}
                                  alt="min"
                                />
                              </CountMinusButton>
                              <Quantity>
                                <Text variant="body" level={3}>
                                  {getDrinkQuantity(drink.id, "small")}
                                </Text>
                              </Quantity>
                              <CountPlusButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDrinkSelect(drink, "small");
                                }}
                              >
                                <Image
                                  src={getIcon("plus", theme)}
                                  width={35}
                                  height={35}
                                  alt="plus"
                                />
                              </CountPlusButton>
                            </CountWrapper>
                          )}
                        </TagItems>
                        <TagItems
                          onClick={() => {
                            if (!isDrinkSelected(drink.id, "large")) {
                              handleDrinkSelect(drink, "large");
                            }
                          }}
                          $isSelected={isDrinkSelected(drink.id, "large")}
                        >
                          <Text variant="body" level={3}>
                            Large - {formatCurrency(extractPrice(drink.variants.large.price))}
                          </Text>
                          {isDrinkSelected(drink.id, "large") && (
                            <CountWrapper>
                              <CountMinusButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDrinkRemove(drink.id, "large");
                                }}
                              >
                                <Image
                                  src={getIcon("min", theme)}
                                  width={35}
                                  height={35}
                                  alt="min"
                                />
                              </CountMinusButton>
                              <Quantity>
                                <Text variant="body" level={3}>
                                  {getDrinkQuantity(drink.id, "large")}
                                </Text>
                              </Quantity>
                              <CountPlusButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDrinkSelect(drink, "large");
                                }}
                              >
                                <Image
                                  src={getIcon("plus", theme)}
                                  width={35}
                                  height={35}
                                  alt="plus"
                                />
                              </CountPlusButton>
                            </CountWrapper>
                          )}
                        </TagItems>
                      </>
                    )}
                  </DrinkContent>
                </DrinkWrapper>
              ))}
            </TagWrapper>

            {selectedDrinks.length > 0 && (
              <TagSelected>
                <Text variant="body" level={5}>
                  Selected Drinks:{" "}
                  {selectedDrinks.map((selection, index) => (
                    <span key={index}>
                      {selection.drink.name}
                      {activeDrinkTab !== "tea" && ` (${selection.variant})`}
                      {` (${selection.quantity}x)`}
                      {index < selectedDrinks.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Text>
              </TagSelected>
            )}
          </InputWrapper>

          <InputWrapper>
            <Label>
              <Tabs
                tabs={simpleTabs}
                activeTab={activeTab2}
                onTabChange={setActiveTab2}
                variant="contained"
              />
            </Label>
            <TagWrapper>
              {selectedFoodItems.map((food: Food) => {
                const isSelected = isFoodSelected(food.id);
                const quantity = getFoodQuantity(food.id);
                return (
                  <TagItems
                    key={food.id}
                    onClick={() => {
                      if (!isFoodSelected(food.id)) {
                        handleFoodSelect(food);
                      }
                    }}
                    $isSelected={isSelected}
                  >
                    <Text variant="body" level={3}>
                      {food.name} - {formatCurrency(extractPrice(food.price))}
                    </Text>
                    {isSelected && (
                      <CountWrapper>
                        <CountMinusButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFoodRemove(food.id);
                          }}
                        >
                          <Image
                            src={getIcon("min", theme)}
                            width={35}
                            height={35}
                            alt="min"
                          />
                        </CountMinusButton>
                        <Quantity>
                          <Text variant="body" level={3}>
                            {quantity}
                          </Text>
                        </Quantity>
                        <CountPlusButton
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFoodSelect(food);
                          }}
                        >
                          <Image
                            src={getIcon("plus", theme)}
                            width={35}
                            height={35}
                            alt="plus"
                          />
                        </CountPlusButton>
                      </CountWrapper>
                    )}
                  </TagItems>
                );
              })}
            </TagWrapper>

            {selectedFoods.length > 0 && (
              <TagSelected>
                <Text variant="body" level={5}>
                  Selected:{" "}
                  {selectedFoods.map((selection, index) => (
                    <span key={index}>
                      {selection.food.name} ({selection.quantity}x)
                      {index < selectedFoods.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </Text>
              </TagSelected>
            )}
          </InputWrapper>

          {selectedItems.length > 0 && (
            <InputWrapper>
              <Label>
                <Text variant="subtitle" level={3}>
                  Order Summary
                </Text>
              </Label>
              <OrderSummaryWrapper>
                {selectedItems.map((item, index) => (
                  <OrderSummaryItem
                    key={index}
                    $isLast={index === selectedItems.length - 1}
                  >
                    <OrderSummaryItemName>
                      <Text variant="body" level={4}>
                        {item.name}
                      </Text>
                    </OrderSummaryItemName>
                    <OrderSummaryItemPrice>
                      <Text variant="body" level={4}>
                        {formatCurrency(item.price)}
                      </Text>
                    </OrderSummaryItemPrice>
                  </OrderSummaryItem>
                ))}
                <OrderSummaryTotal>
                  <OrderSummaryTotalLabel>
                    <Text variant="subtitle" level={2}>
                      Total Price:
                    </Text>
                  </OrderSummaryTotalLabel>
                  <OrderSummaryTotalPrice>
                    <Text variant="subtitle" level={2}>
                      {formatCurrency(totalPrice)}
                    </Text>
                  </OrderSummaryTotalPrice>
                </OrderSummaryTotal>
              </OrderSummaryWrapper>
            </InputWrapper>
          )}

          <Button
            variant="filled"
            onClick={handleCreate}
            disabled={!selectedCustomer || !selectedDate || !selectedPackage}
          >
            Create Order {totalPrice > 0 && `- ${formatCurrency(totalPrice)}`}
          </Button>
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

export default InputModal;