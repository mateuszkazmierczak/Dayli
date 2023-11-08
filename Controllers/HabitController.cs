﻿using Microsoft.AspNetCore.Mvc;
using BetterDay.Models;
using Microsoft.AspNetCore.Authorization;

namespace BetterDay.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class HabitController : ControllerBase
    {
        [HttpGet("all")]
        public async Task<IEnumerable<HabitGroupModel>> GetAllHabits()
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return await HabitGroupModel.GetAllUserHabitGroups(currUser);
        }

        [HttpGet("today")]
        public async Task<IActionResult> GetTodaysHabits()
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return null;
        }

        [HttpGet("{startDate}:{endDate}")]
        public async Task<IActionResult> GetHabitsBetweenDates(DateTime startDate, DateTime endDate)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return null;
        }

        [HttpPut("create/{date}")]
        public async Task<IActionResult> CreateHabitsForDate(DateTime date, [FromBody] IEnumerable<HabitModel> habits)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return null;
        }

        [HttpPost("update/{id}/{status}")]
        public async Task<IActionResult> UpdateHabit(int id, bool status)
        {
            string currUser = TokenHandler.GetCurrentUser(User.Claims);
            return null;
        }

    }
}
