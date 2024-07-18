import React, {useState, useEffect} from "react";
import {Box, Grid, Paper, Typography, Divider} from "@mui/material";
import dayjs, {Dayjs} from "dayjs";
import Calendar from "../components/Calendar";
import FilterProduct from "../components/FilterProduct";
import FilterSource from "../components/FilterSource";
import OverallSentimentScore from "../components/Dashboard/OverallSentimentScore";
import SentimentDistribution from "../components/Dashboard/SentimentDistribution";
import SentimentScoreGraph from "../components/SentimentScoreGraph";
import CategoriesSunburstChart from "../components/Dashboard/CategoriesSunburstChart";
import SentimentCategoriesGraph from "../components/SentimentCategoriesGraph";

interface DashboardProps {
    setFromDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    fromDate: Dayjs;
    setToDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    toDate: Dayjs;
    selectedProduct: string[];
    setSelectedProduct: React.Dispatch<React.SetStateAction<string[]>>;
    selectedSource: string[];
    setSelectedSource: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dashboard({
    setFromDate,
    fromDate,
    setToDate,
    toDate,
    selectedProduct,
    setSelectedProduct,
    selectedSource,
    setSelectedSource,
    setSelectedMenu,
}: DashboardProps) {
    return (
        <>
            <h1>Overview Dashboard</h1>
            <Box sx={{flexGrow: 1, flexDirection: "row"}}>
                <Grid container>
                    <Calendar
                        fromDate={fromDate}
                        setFromDate={setFromDate}
                        toDate={toDate}
                        setToDate={setToDate}
                    />
                    <FilterProduct
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                    />
                    <FilterSource
                        selectedSource={selectedSource}
                        setSelectedSource={setSelectedSource}
                    />
                </Grid>
            </Box>

            {/* If dates, products, sources not selected yet, all these should not show / be disabled */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <OverallSentimentScore
                    fromDate={fromDate}
                    toDate={toDate}
                    selectedProduct={selectedProduct}
                    selectedSource={selectedSource}
                    setSelectedMenu={setSelectedMenu}
                />

                <SentimentDistribution
                    fromDate={fromDate}
                    toDate={toDate}
                    selectedProduct={selectedProduct}
                    selectedSource={selectedSource}
                    setSelectedMenu={setSelectedMenu}
                />

                <Paper
                    sx={{
                        p: 2,
                        borderRadius: 2,
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: 200,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                    >
                        <Box sx={{textAlign: "center"}}>
                            <Typography
                                variant="body1"
                                sx={{fontWeight: "bold"}}
                            >
                                To Promote
                            </Typography>
                            <Typography variant="body2" color="grey">
                                maintain user-friendly staff
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{textAlign: "center"}}>
                            <Typography
                                variant="body1"
                                sx={{fontWeight: "bold"}}
                            >
                                To Amplify
                            </Typography>
                            <Typography variant="body2" color="grey">
                                Price
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{textAlign: "center"}}>
                            <Typography
                                variant="body1"
                                sx={{fontWeight: "bold"}}
                            >
                                Keep in Mind
                            </Typography>
                            <Typography variant="body2" color="grey">
                                More efficient card replacement
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box sx={{textAlign: "center"}}>
                            <Typography
                                variant="body1"
                                sx={{fontWeight: "bold"}}
                            >
                                To Fix
                            </Typography>
                            <Typography variant="body2" color="grey">
                                Paylah! break downs
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
                {/* setSelectedMenu = {setSelectedMenu} */}
            </Box>

            <SentimentScoreGraph
                fromDate={fromDate}
                toDate={toDate}
                selectedProduct={selectedProduct}
                selectedSource={selectedSource}
                isDetailed={false}
                setSelectedMenu={setSelectedMenu}
            />

            <CategoriesSunburstChart
                fromDate={fromDate}
                toDate={toDate}
                selectedProduct={selectedProduct}
                selectedSource={selectedSource}
                setSelectedMenu={setSelectedMenu}
            />

            <SentimentCategoriesGraph
                fromDate={fromDate}
                toDate={toDate}
                selectedProduct={selectedProduct}
                selectedSource={selectedSource}
                isDetailed={false}
                setSelectedMenu={setSelectedMenu}
            />
        </>
    );
}
